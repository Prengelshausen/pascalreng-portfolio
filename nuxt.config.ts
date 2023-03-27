// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon','@nuxtjs/i18n',],
    app: {
        head: {
            title: 'Pascal Rengelshausen',
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'}
            ]
        },
        
    },
    i18n: {
        locales: ['en','de','pt'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        vueI18n: {
          legacy: false,
          locale: 'en',
          messages: {
            en: {
                navbar: {
                    cv: 'Download CV'
                },
                introduction: {
                    title: "HI, I'M PASCAL!",
                    subtext: "I'm an Austrian web developer based in Lisbon. And I love to bring your web ideas to life!",
                    email: "E-mail me",
                    linkedin: "My LinkedIn",
                    github: "My Github",
                },
                experience: {
                    title: "My Skills",
                    subtext: "Technology Stack I learned and used in my 5 years of school",
                    note:"Note: Some technologies, like Nuxt.js, I learned by myself during and even after completing school",
                },
                projects: {
                    title: "My Projects",
                    link:"View this Project on Github"
                },
                footer: {
                    copyright: "© 2023 Made by",
                    subtext: "Austrian web developer based in Lisbon, Portugal."
                }
            },
            de: {
                navbar: {
                    cv: 'Lebenslauf herunterladen'
                },
                introduction: {
                    title: "HI, ICH BIN PASCAL!",
                    subtext: "Ich bin ein österreichischer Webentwickler der in Lissabon lebt. Und ich bringe Ihre Web-Ideen zum Leben!",
                    email: "Meine E-mail",
                    linkedin: "Mein LinkedIn",
                    github: "Mein Github",
                },
                experience: {
                    title: "Meine Skills",
                    subtext: "Technology Stack, den ich in meiner 5-jährigen Schulzeit gelernt und angewendet habe",
                    note:"Note: Manche Technologien, wie Nuxt.js, habe ich mir während und auch nach dem Schulabschluss selbst beigebracht",
                },
                projects: {
                    title: "Meine Projekte",
                    link:"Dieses Projekt auf Github anzeigen"
                },
                footer: {
                    copyright: "© 2023 Erstellt von",
                    subtext: "österreichischer Webentwickler in Lissabon, Portugal."
                }
            },
            // pt: {
            //     navbar: {
            //         cv: 'Download CV'
            //     },
            //     introduction: {
            //         title: "HI, I'M PASCAL!",
            //         subtext: "I'm an Austrian web developer based in Lisbon. And I love to bring your web ideas to life!",
            //         email: "E-mail me",
            //         linkedin: "My LinkedIn",
            //         github: "My Github",
            //     },
            //     experience: {
            //         title: "My Skills",
            //         subtext: "Technology Stack I learned and used in my 5 years of school",
            //         note:"Note: Some technologies, like Nuxt.js, I learned by myself during and even after completing school",
            //     },
            //     projects: {
            //         title: "My Projects",
            //         link:"View this Project on Github"
            //     },
            //     footer: {
            //         copyright: "© 2023 Made by",
            //         subtext: "Austrian web developer based in Lisbon, Portugal."
            //     }
            // },
          }
        }
      }
})
