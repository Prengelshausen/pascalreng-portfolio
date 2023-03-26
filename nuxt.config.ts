// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon','@nuxt/image-edge',],
    app: {
        head: {
            title: 'Pascal Rengelshausen',
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'}
            ]
        },
        
    }
})
