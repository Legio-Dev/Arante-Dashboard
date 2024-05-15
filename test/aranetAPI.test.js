const axios = require('axios');
const apiKey = "pcx8tuhggs9p22f84phfbkz8vqn29brn";
const headers = {
    headers: {
        "accept": "application/json",
        "ApiKey": apiKey
    }
}

const getBasesCloud = async () => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/bases', headers);
        console.log(response.data);
    } catch (error) {
        console.log('Ha ocurrido un error...', error.message);
    }
}

const idBase = "349961004265";

const getBaseInfo = async (idBase) => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/bases/base/' + idBase, headers);
        console.log(response.data);
    } catch (error) {
        console.log('Ha ocurrido un error...', error.message);
    }
}

const getAllSensorsByBase = async (idBase) => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/sensors?base=' + idBase, headers);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

const sensores =[
    {
        id: "1052056",
        sensorId: "00D98",
        name: "Patio",
        type: "S1V17"
    },
    {
        id: "1052301",
        sensorId: "00E8D",
        name: "Sala Reuniones",
        type: "S1V17"
    },
    {
        id: "1052309",
        sensorId: "00E95",
        name: "Comedor",
        type: "S1V17"
    },
    {
        id: "1052290",
        sensorId: "00E82",
        name: "NOC",
        type: "S1V17"
    },
    {
        id: "4205085",
        sensorId: "02A1D",
        name: "Bodega",
        type: "S4V1"
    },
    {
        id: "4207756",
        sensorId: "0348C",
        name: "Tech",
        type: "S4V1"
    }
]

const getSensorMetadata = async (id) => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/sensors/sensor/' + id, headers);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

/**
 * Metricas:
 * Temperatura -> 1
 * Humedad -> 2
 * CO2 -> 3
 * Presion Atmosferica -> 4
 * RSSI -> 61
 * Voltaje Bateria -> 62
 */


const getMeasureBySensorAndMetric = async (id,metric) => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/measurements/last?sensor=' + id+'&metric='+metric, headers);
        console.log(response.data.readings[0].value);
    } catch (error) {
        console.log(error.message);
    }
}

//getBasesCloud();
//getBaseInfo(idBase);
//getAllSensorsByBase(idBase);
//getSensorMetadata(sensores[5].id);


setInterval(() => {
    getMeasureBySensorAndMetric(sensores[0].id,1);
}, 60000);

//El formato de fecha y hora se utiliza lo siguiente
//ISO6801
//toISOString()


const getTelemetryBySensorAndMetric = async (id,metric) => {
    try {
        const response = await axios.get('https://aranet.cloud/api/v1/telemetry/history?sensor=' + id+'&metric='+metric+'&minutes=5', headers);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

//getTelemetryBySensorAndMetric(sensores[0].id,1);
// Change these settings to change the display for different parts of the X axis
// grid configuration
const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;

const config = {
  type: 'line',
  data: data,
  options: {
    
  },
};