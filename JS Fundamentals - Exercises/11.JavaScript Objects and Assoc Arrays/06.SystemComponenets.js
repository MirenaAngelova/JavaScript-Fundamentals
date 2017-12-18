function systemComponents(systemData) {
    let systems = new Map();
    for (let data of systemData) {
        let [system, component, subcomponent] = data.split(/ \| /);
        if (!systems.has(system)) {
            systems.set(system, new Map());
        }
        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, new Array);
        }
        systems.get(system).get(component).push(subcomponent);
    }
    let sortedSystems = Array.from(systems.keys()).sort((a, b) => sysSortFunction(a, b));

    for (let system of sortedSystems) {
        console.log(`${system}`);
        let sortedComponents =
            Array.from(systems.get(system).keys()).sort((a, b) => comSortFunction(a, b, system));
        for (let component of sortedComponents) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(sub => console.log(`||||||${sub}`));
        }
    }

    function sysSortFunction(a, b) {
        if (systems.get(a).size != systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function comSortFunction(a, b, system) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length;
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);