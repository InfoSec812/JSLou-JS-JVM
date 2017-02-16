var env = Java.type("java.lang.System").getenv();

vertx.setPeriodic(750, function(t) {
    vertx.eventBus().publish("ev.periodic", env.get("NODE_ID"));
});

vertx.eventBus().consumer("ev.periodic", function(msg) {
    console.log(msg.body());
});
