/** @type {import('next').NextConfig} */
const nextConfig = {
        appDir: true,
        fontLoaders: [ 
          { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ]

}

module.exports = nextConfig
