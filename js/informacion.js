let ordenadores = [
    {
        id: 1,
        nombre: "PcCom Ready Intel",
        procesador: "Intel i5-12400F",
        ram: "16GB",
        almacenamiento: "1TB SSD",
        grafica: "RTX 2060",
        
    },
    {
        id: 2,
        nombre: "Medion Erazer Engineer P10",
        procesador: "Intel i5-12400F",
        ram: "16GB",
        almacenamiento: "512GB SSD",
        grafica: "RTX 3080",
    
    },
    {
        id: 3,
        nombre: "PcCom Lite",
        procesador: "Intel i5 10400F",
        ram: "16 GB",
        almacenamiento: "500GB SSD",
        grafica: "RTX 1080",
       
    },
    {
        id: 4,
        nombre: "PcCom Imperial",
        procesador: "Intel i5 11600f",
        ram: "8GB",
        almacenamiento: "256GB SSD",
        grafica: "RTX 1080",
    
    },
    {
        id: 5,
        nombre: "MSI Thin GF63",
        procesador: "Intel i7-12650H",
        ram: "16GB",
        almacenamiento: "1TB SSD",
        grafica: "RTX 3050",
      
    },
    {
        id: 6,
        nombre: "ASUS TUF Gaming F15",
        procesador: "Intel i7-12700H",
        ram: "16GB",
        almacenamiento: "512GB SSD",
        grafica: "RTX 3050",
   
    },
    {
        id: 7,
        nombre: "HP 15S-eq2126ns",
        procesador: "AMD Ryzen 3 5300U",
        ram: "8GB",
        almacenamiento: "256GB SSD",
        grafica: "GT 710",
       
    },
    {
        id: 8,
        nombre: "Arizone Raijin",
        procesador: "AMD Ryzen 5 5600G",
        ram: "32GB",
        almacenamiento: "1TB SSD",
        grafica: "AMD RADEON VEGA",
       
    },
    {
        id: 9,
        nombre: "Asus 15DX30",
        procesador: "AMD Ryzen 7 5700X",
        ram: "64GB",
        almacenamiento: "2TB SSD",
        grafica: "RX 6700",
       
    }
];

function caracteristicas(id) {
    const ordenador = ordenadores.find(ordenador => ordenador.id === id);

    
        let caracteristicas = `
            \t Características
            Nombre: ${ordenador.nombre}
            Procesador: ${ordenador.procesador}
            RAM: ${ordenador.ram}
            Almacenamiento: ${ordenador.almacenamiento}
            Gráfica: ${ordenador.grafica}
        `;
        alert(caracteristicas);
    
}