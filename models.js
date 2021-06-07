class SensorModel1 {
    constructor(id, name, metrics, flux) {
        this.id = id;
        this.name = name;
        this.metricsPollution = metrics;
        this.flux = flux;
    }
}

class SensorModel2 {
    constructor(id, name, metrics) {
        this.id = id;
        this.name = name;
        this.metricsPollution = metrics;
    }
}


class SensorModel3 {
    constructor(id, ref, name, provider, metrics) {
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.provider = provider;
        this.metrics = metrics;
    }
}

module.exports = {
    SensorModel1,
    SensorModel2,
    SensorModel3
}