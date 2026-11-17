ServerEvents.recipes(event => {
  event.recipes.createSequencedAssembly([
    CreateItem.of("create:precision_mechanism", 120.0),
    CreateItem.of("create:golden_sheet", 8.0),
    CreateItem.of("create:andesite_alloy", 8.0),
    CreateItem.of("create:cogwheel", 5.0),
    CreateItem.of("minecraft:gold_nugget", 3.0),
    CreateItem.of("create:shaft", 2.0),
    CreateItem.of("create:crushed_raw_gold", 2.0),
    CreateItem.of("minecraft:iron_ingot", 1.0),
    CreateItem.of("minecraft:clock", 1.0),
  ],
  "create:golden_sheet",
  [
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:cogwheel"]),
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:large_cogwheel"]),
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "minecraft:iron_nugget"]),
  ]
).transitionalItem("create:incomplete_precision_mechanism").loops(5)
})
