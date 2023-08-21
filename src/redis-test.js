const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("connect", function() {
  console.log("Conectado a Redis");

  client.set("testKey", "testValue", (err, reply) => {
    if (err) {
      console.error("Error al guardar en Redis:", err);
    } else {
      console.log("Respuesta de Redis:", reply);
      client.quit();
    }
  });
});

client.on("error", function(error) {
  console.error("Error de Redis:", error);
});

// Timeout para mantener el proceso en ejecución por unos segundos
setTimeout(() => {
  console.log("Finalizando proceso...");
  process.exit(0);
}, 10000);

console.log("Iniciando conexión a Redis...");
