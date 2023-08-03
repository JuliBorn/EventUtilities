import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useVoltageStore = create(
    persist(
        (set, get) => ({
            current: 10,
            setCurrent: (current) => {
                //console.log(current);
                set({ current: current });
            },
            voltage: 230,
            setVoltage: (voltage) => set({ voltage: voltage }),
            distance: 40,
            setDistance: (distance) => set({ distance: distance }),
            crossSection: 1.5,
            setCrossSection: (crossSection) =>
                set({ crossSection: crossSection }),
            resistivity: 56,
            setResistivity: (resistivity) => set({ resistivity: resistivity }),
        }),
        {
            name: 'voltage-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export const useDMXStore = create(
    persist(
        (set, get) => ({
            address: 10,
            setAddress: (address) => {
                //console.log(current);
                set({ address: address });
            },

        }),
        {
            name: 'dmx-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);