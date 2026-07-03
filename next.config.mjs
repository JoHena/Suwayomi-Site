import nextra from 'nextra'

const withNextra = nextra({
    unstable_shouldAddLocaleToLinks: true,
})

export default withNextra({
    output: 'export',
    images: {
        unoptimized: true,
    },
    i18n: {
        locales: ['en', 'ja', 'es'],
        defaultLocale: 'en',
    },
    webpack: (config) => {
        config.cache = false
        return config
    },
})
