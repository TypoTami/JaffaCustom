ServerEvents.recipes(event => {
    // Easier Andesite Alloy
    event.remove({output: 'create:andesite_alloy'})
    event.shapeless('create:andesite_alloy', ['minecraft:andesite', 'create:zinc_nugget'])

    // Easier Andesite Casing
    event.shapeless('create:andesite_casing', ['create:andesite_alloy', '#minecraft:logs'])

    // Easier Brass Casing
    event.shapeless('create:brass_casing', ['create:brass_ingot', '#minecraft:logs'])

    // Easier Copper Casing
    event.shapeless('create:copper_casing', ['minecraft:copper_ingot', '#minecraft:logs'])

    // Remove Ad Astra Recipes
    event.remove({output: 'ad_astra:tier_1_rocket'})
    event.remove({output: 'ad_astra:tier_2_rocket'})
    event.remove({output: 'ad_astra:tier_3_rocket'})
    event.remove({output: 'ad_astra:tier_4_rocket'})
    event.remove({output: 'ad_astra:nasa_workbench'})
    event.remove({output: 'ad_astra:fuel_refinery'})

    // Tier 1 Rocket
    event.recipes.create.mechanical_crafting('ad_astra:tier_1_rocket', [
        '  N  ',
        '  S  ',
        ' SGS ',
        ' JJJ ',
        ' SSS ',
        'FTTTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        S: '#forge:storage_blocks/steel',
        G: '#forge:glass',
        J: 'jaffabricate:jaffa_pallet',
        F: 'ad_astra:rocket_fin',
        T: 'ad_astra:steel_tank',
        E: 'ad_astra:steel_engine',
    })

    // Tier 2 Rocket
    event.recipes.create.mechanical_crafting('ad_astra:tier_2_rocket', [
        '  N  ',
        '  S  ',
        ' SGS ',
        ' JJJ ',
        ' SSS ',
        'FTTTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        S: '#forge:storage_blocks/desh',
        G: '#forge:glass',
        J: 'jaffabricate:jaffa_pallet',
        F: 'ad_astra:rocket_fin',
        T: 'ad_astra:desh_tank',
        E: 'ad_astra:desh_engine',
    })

    // Tier 3 Rocket
    event.recipes.create.mechanical_crafting('ad_astra:tier_3_rocket', [
        '  N  ',
        '  S  ',
        ' SGS ',
        ' JJJ ',
        ' SSS ',
        'FTTTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        S: '#forge:storage_blocks/ostrum',
        G: '#forge:glass',
        J: 'jaffabricate:jaffa_pallet',
        F: 'ad_astra:rocket_fin',
        T: 'ad_astra:ostrum_tank',
        E: 'ad_astra:ostrum_engine',
    })

    // Tier 4 Rocket
    event.recipes.create.mechanical_crafting('ad_astra:tier_4_rocket', [
        '  N  ',
        '  S  ',
        ' SGS ',
        ' JJJ ',
        ' SSS ',
        'FTTTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        S: '#forge:storage_blocks/calorite',
        G: '#forge:glass',
        J: 'jaffabricate:jaffa_pallet',
        F: 'ad_astra:rocket_fin',
        T: 'ad_astra:calorite_tank',
        E: 'ad_astra:calorite_engine',
    })

    // Fuel from Choc-Orange Slurry
    event.recipes.create.mixing(Fluid.of('kubejs:choc_orange_slurry', 250), [Fluid.of('create:chocolate', 250), Fluid.of('jaffabricate:orange_juice', 250)]).heated()
    event.recipes.create.mixing(Fluid.of('ad_astra:fuel', 250), [Fluid.of('ad_astra:oil', 250), Fluid.of('kubejs:choc_orange_slurry', 250)]).heated()

    // Remove Refined Storage Recipes
    event.remove({output: 'refinedstorage:processor_binding'})
    event.remove({output: 'refinedstorage:raw_basic_processor'})
    event.remove({output: 'refinedstorage:raw_improved_processor'})
    event.remove({output: 'refinedstorage:raw_advanced_processor'})
    event.remove({output: 'refinedstorage:basic_processor'})
    event.remove({output: 'refinedstorage:improved_processor'})
    event.remove({output: 'refinedstorage:advanced_processor'})

    // Easier Refined Storage Recipes
    event.shapeless('refinedstorage:basic_processor', ['minecraft:iron_ingot', 'minecraft:redstone', 'minecraft:quartz'])
    event.shapeless('refinedstorage:improved_processor', ['minecraft:gold_ingot', 'minecraft:redstone', 'minecraft:quartz'])
    event.shapeless('refinedstorage:advanced_processor', ['minecraft:diamond', 'minecraft:redstone', 'minecraft:quartz'])

    // Tuff Recipe
    event.recipes.create.mixing('minecraft:tuff', ['minecraft:cobblestone', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:granite'])

    // Blaze Rod Recipe
    event.recipes.create.mixing('minecraft:blaze_rod', '#forge:rods/iron').heated()

    // Glowstone Recipe
    event.recipes.create.crushing('minecraft:glowstone_dust', 'minecraft:torch')

    // Redstone Recipe
    event.recipes.create.haunting('minecraft:redstone', 'minecraft:glowstone_dust')
})