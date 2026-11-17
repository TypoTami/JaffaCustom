const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
    event.create('choc_orange_slurry')
    .tint(0xA95F08)
    .displayName('Choc-Orange Slurry')
})
