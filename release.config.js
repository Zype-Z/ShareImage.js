module.exports = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "master",
        "next",
        "next-major",
        {
            name: "beta",
            prerelease: true,
        },
        {
            name: "alpha",
            prerelease: true,
        },
    ],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "angular",
            },
        ],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
          "@semantic-release/npm"
            {
               "pkgRoot": "./dist"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": ["CHANGELOG.md", "package.json"],
                "message": "Release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        "@semantic-release/github",
    ]
};
