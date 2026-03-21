import { inject, Injectable, resource, computed } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { signal } from '@angular/core';
import { MaCotizadorService } from './ma-cotizador.service';
import { VehicleVersion } from '../models/ma-cotizador.models';

@Injectable({ providedIn: 'root' })
export class VehiculosService {
    private readonly api = inject(MaCotizadorService);

    private readonly _marcaSeleccionada = signal<string>('');
    private readonly _modeloSeleccionado = signal<string>('');

    /** 
     * Whitelist: Marcas de autos con presencia en Argentina (Nuevos y Usados).
     * Esto filtra automáticamente motos, camiones pesados y marcas internacionales sin mercado local.
     */
    private readonly MARCAS_AUTOS_ARGENTINA = new Set([
        'ALFA ROMEO', 'AUDI', 'BAIC', 'BMW', 'BYD', 'CHANGAN', 'CHERY', 'CHEVROLET',
        'CHRYSLER', 'CITROEN', 'CORADIR', 'DACIA', 'DAEWOO', 'DAIHATSU', 'DFSK',
        'DODGE', 'DS AUTOMOBILES', 'FERRARI', 'FIAT', 'FORD', 'FOTON', 'GEELY',
        'GREAT WALL', 'HAVAL', 'HONDA', 'HUMMER', 'HYUNDAI', 'IKA', 'ISUZU',
        'IVECO', 'JAC', 'JAGUAR', 'JEEP', 'JETOUR', 'JMC', 'KIA', 'KYC',
        'LAMBORGHINI', 'LAND ROVER', 'LEXUS', 'LIFAN', 'MASERATI', 'MAZDA',
        'MERCEDES BENZ', 'MINI', 'MITSUBISHI', 'NISSAN', 'PEUGEOT', 'PORSCHE',
        'RAM', 'RENAULT', 'ROVER', 'SAAB', 'SEAT', 'SERO ELECTRIC', 'SHINERAY',
        'SMART', 'SSANGYONG', 'SUBARU', 'SUZUKI', 'TATA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO'
    ]);

    /** Helper para extraer y filtrar marcas */
    private extractList(resp: any, filterCars = false): any[] {
        console.log(`[VehiculosService] extractList() llamado. filterCars: ${filterCars}. Respuesta original:`, resp);
        let list: any[] = [];
        if (Array.isArray(resp)) {
            list = resp;
        } else {
            list = resp?.value || resp?.Value || [];
        }

        console.log(`[VehiculosService] extractList() lista extraída (longitud: ${list?.length || 0}):`, list);

        if (filterCars) {
            try {
                // Solo dejamos las marcas que están en nuestra lista blanca de Argentina
                const filtered = list.filter(m => {
                    if (typeof m !== 'string') {
                        console.warn('[VehiculosService] Advertencia en filtrado: el ítem no es un string:', m);
                        // Si por algún motivo retornan objetos en lugar de strings, tratamos de extraer el posible campo 'nombre'.
                        const nameToTest = m?.nombre || m?.name || '';
                        return typeof nameToTest === 'string' && nameToTest !== '' && this.MARCAS_AUTOS_ARGENTINA.has(nameToTest.toUpperCase());
                    }
                    return this.MARCAS_AUTOS_ARGENTINA.has(m.toUpperCase());
                });
                console.log(`[VehiculosService] extractList() lista filtrada (longitud: ${filtered.length}):`, filtered);
                return filtered;
            } catch (error) {
                console.error('[VehiculosService] extractList() Error al filtrar las marcas:', error);
                return list;
            }
        }

        return list;
    }

    /** Marcas: Filtradas por mercado argentino */
    private readonly _marcasResource = resource({
        loader: async () => {
            console.log('[VehiculosService] resource.loader -> Iniciando carga de marcas...');
            try {
                const resp = await firstValueFrom(this.api.getMarcas());
                console.log('[VehiculosService] resource.loader -> getMarcas() response:', resp);
                const brands = this.extractList(resp, true);
                console.log('[VehiculosService] resource.loader -> Marcas procesadas finales:', brands);
                return brands;
            } catch (err) {
                console.error('[VehiculosService] Error cargando marcas desde la API:', err);
                return [];
            }
        }
    });

    /** Modelos */
    private readonly _modelosResource = resource({
        params: () => this._marcaSeleccionada(),
        loader: async ({ params: marca }) => {
            if (!marca) return [];
            console.log(`[VehiculosService] resource.loader -> Iniciando carga de modelos para marca: ${marca}`);
            try {
                const resp = await firstValueFrom(this.api.getModelos(marca));
                console.log(`[VehiculosService] resource.loader -> getModelos(${marca}) response:`, resp);
                return this.extractList(resp);
            } catch (err) {
                console.error('[VehiculosService] Error cargando modelos:', err);
                return [];
            }
        }
    });

    /** Versiones */
    private readonly _versionesResource = resource({
        params: () => ({
            marca: this._marcaSeleccionada(),
            modelo: this._modeloSeleccionado(),
        }),
        loader: async ({ params }) => {
            if (!params.marca || !params.modelo) return [];
            console.log(`[VehiculosService] resource.loader -> Iniciando carga de versiones para ${params.marca} - ${params.modelo}`);
            try {
                const resp = await firstValueFrom(this.api.getVersiones(params.marca, params.modelo));
                console.log(`[VehiculosService] resource.loader -> getVersiones(${params.marca}, ${params.modelo}) response:`, resp);
                return this.extractList(resp);
            } catch (err) {
                console.error('[VehiculosService] Error cargando versiones:', err);
                return [];
            }
        }
    });

    // ── Signals públicos ───────────────────────────────────────

    readonly marcas = computed(() => this._marcasResource.value() ?? []);
    readonly modelos = computed(() => this._modelosResource.value() ?? []);
    readonly versiones = computed(() => this._versionesResource.value() ?? []);

    readonly cargandoMarcas = this._marcasResource.isLoading;
    readonly cargandoModelos = this._modelosResource.isLoading;
    readonly cargandoVersiones = this._versionesResource.isLoading;

    // ── Métodos de selección ──────────────────────────────────

    seleccionarMarca(marca: string): void {
        this._marcaSeleccionada.set(marca);
        this._modeloSeleccionado.set('');
    }

    seleccionarModelo(modelo: string): void {
        this._modeloSeleccionado.set(modelo);
    }

    cargarMarcas(): void { }
    cargarModelos(marca: string): void { this.seleccionarMarca(marca); }
    cargarVersiones(marca: string, modelo: string): void {
        this._marcaSeleccionada.set(marca);
        this._modeloSeleccionado.set(modelo);
    }
}
