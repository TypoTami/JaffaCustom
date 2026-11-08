JEIEvents.hideItems(event => {
    // Hide Ad Astra Workbenches
    event.hide('ad_astra:nasa_workbench')
    event.hide('ad_astra:fuel_refinery')

    // Hide Refined Storage Glorp
    event.hide('refinedstorage:processor_binding')
    event.hide('refinedstorage:raw_basic_processor')
    event.hide('refinedstorage:raw_improved_processor')
    event.hide('refinedstorage:raw_advanced_processor')
})