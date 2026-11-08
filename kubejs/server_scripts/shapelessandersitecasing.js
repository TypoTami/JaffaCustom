ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('create:andesite_casing', 2), // arg 1: output
        [
        '#minecraft:logs',
        'create:andesite_alloy'
        ]
    );
});
