ServerEvents.recipes(event => {
    const pbAmmo = (outputItem, outputCount, ingredients) => {
        event.remove({ output: outputItem })

        const formattedIngredients = ingredients.map(entry => {
            if (entry.tag) {
                return {
                    count: entry.count || 1,
                    ingredient: { tag: entry.tag }
                }
            }
            return {
                count: entry.count || 1,
                ingredient: { item: entry.item }
            }
        })

        event.custom({
            type: 'pointblank:default',
            ingredients: formattedIngredients,
            result: {
                count: outputCount,
                item: outputItem
            }
        })
    }

    // --- PISTOL & SMG CALIBRES (Brass Casings + Lead Bullets) ---
    pbAmmo('pointblank:ammo9mm', 30, [
        { count: 1, tag: '#forge:ingots/brass' },
        { count: 1, tag: '#forge:ingots/lead' },
        { count: 1, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo45acp', 30, [
        { count: 1, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 1, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo46', 30, [
        { count: 1, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/nickel' },
        { count: 1, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo57', 30, [
        { count: 1, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/nickel' },
        { count: 1, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo357', 24, [
        { count: 1, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo50ae', 20, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    // --- ASSAULT & BATTLE RIFLE CALIBRES (Brass + Lead/Steel + Blaze Powder) ---
    pbAmmo('pointblank:ammo545', 30, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo556', 30, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo68', 30, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/steel' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo762', 30, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:ammo762x51', 20, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/steel' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    // --- HEAVY SNIPER & ANTI-MATERIEL (Brass + Steel/Invar + Blaze Powder) ---
    pbAmmo('pointblank:ammo338lapua', 12, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 2, tag: 'forge:ingots/invar' },
        { count: 2, item: 'minecraft:gunpowder' },
        { count: 1, item: 'minecraft:blaze_powder' }
    ])

    pbAmmo('pointblank:ammo50bmg', 10, [
        { count: 3, tag: 'forge:ingots/brass' },
        { count: 2, tag: 'forge:ingots/steel' },
        { count: 3, item: 'minecraft:gunpowder' },
        { count: 1, item: 'minecraft:blaze_powder' }
    ])

    // --- SHOTGUN SHELLS ---
    pbAmmo('pointblank:ammoshotgun', 16, [
        { count: 1, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' },
        { count: 1, item: 'minecraft:paper' }
    ])

    // --- GRENADES & LAUNCHERS (Steel + Warium Explosives / Thermal Electronics) ---
    pbAmmo('pointblank:grenade40mm', 4, [
        { count: 2, tag: 'forge:ingots/steel' },
        { count: 1, item: 'crusty_chunks:explosive_barrel' }
    ])

    pbAmmo('pointblank:grenade20mm', 6, [
        { count: 1, tag: 'forge:ingots/steel' },
        { count: 2, item: 'minecraft:tnt' }
    ])

    pbAmmo('pointblank:smaw_rocket', 2, [
        { count: 3, tag: 'forge:ingots/steel' },
        { count: 1, item: 'crusty_chunks:explosive_barrel' },
        { count: 2, item: 'minecraft:blaze_powder' }
    ])

    pbAmmo('pointblank:at4_rocket', 2, [
        { count: 3, tag: 'forge:ingots/steel' },
        { count: 1, item: 'crusty_chunks:explosive_barrel' },
        { count: 2, item: 'minecraft:blaze_powder' }
    ])

    pbAmmo('pointblank:javelin_rocket', 1, [
        { count: 4, tag: 'forge:ingots/steel' },
        { count: 1, item: 'crusty_chunks:explosive_barrel' },
        { count: 1, item: 'thermal:rf_coil' },
        { count: 1, item: 'pointblank:processor' }
    ])

    pbAmmo('pointblank:stinger_rocket', 1, [
        { count: 4, tag: 'forge:ingots/steel' },
        { count: 1, item: 'crusty_chunks:explosive_barrel' },
        { count: 1, item: 'thermal:rf_coil' },
        { count: 1, item: 'pointblank:processor' }
    ])

    // --- ENERGY & SPECIAL AMMO (Mekanism / Thermal / Half-Life) ---
    pbAmmo('pointblank:ammolaser', 1, [
        { count: 2, tag: 'forge:ingots/invar' },
        { count: 1, item: 'mekanism:energy_tablet' },
        { count: 1, item: 'minecraft:glowstone_dust' }
    ])

    pbAmmo('pointblank:hl_rebar', 8, [
        { count: 2, tag: 'forge:ingots/steel' }
    ])

    // --- EXTENDED PACK AMMO ---
    pbAmmo('pointblank:pbext_4570govt', 20, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/lead' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])

    pbAmmo('pointblank:pbext_9x39mm', 30, [
        { count: 2, tag: 'forge:ingots/brass' },
        { count: 1, tag: 'forge:ingots/steel' },
        { count: 2, item: 'minecraft:gunpowder' }
    ])
})
