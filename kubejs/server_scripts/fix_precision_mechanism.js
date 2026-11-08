ServerEvents.recipes(event => {
  event.recipes.createSequencedAssembly([
    Item.of("create:precision_mechanism").withChance(120.0),
    Item.of("create:golden_sheet").withChance(8.0),
    Item.of("create:andesite_alloy").withChance(8.0),
    Item.of("create:cogwheel").withChance(5.0),
    Item.of("minecraft:gold_nugget").withChance(3.0),
    Item.of("create:shaft").withChance(2.0),
    Item.of("create:crushed_raw_gold").withChance(2.0),
    Item.of("minecraft:iron_ingot").withChance(1.0),
    Item.of("minecraft:clock").withChance(1.0),
  ],
  "create:golden_sheet",
  [
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:cogwheel"]),
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:large_cogwheel"]),
    event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "minecraft:iron_nugget"]),
  ]
).transitionalItem("create:incomplete_precision_mechanism").loops(5)
})