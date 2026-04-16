const fs = require('node:fs');
const test = require('node:test');
const assert = require('assert');
const parseRobots = require('./index.js');

test.describe('Pemrosesan untuk brave.com', () => {
    const brave = fs.readFileSync('./daftar/brave.txt', 'utf-8');
    const result = parseRobots(brave);

    test.it("Hanya ada satu user-agent, yaitu global", () => {
        assert.strictEqual(result.agents.hasOwnProperty('*'), true);
    })

    test.it('Menyiratkan seluruh lamannya boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Allow, []);
    })

    test.it('Tidak ada laman yang tidak boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Disallow, []);
    })

    test.it('Sitemap menunjuk pada alamat XML yang benar', () => {
        assert.strictEqual(result.Sitemap[0], "https://brave.com/sitemap.xml");
    })
});

test.describe('Pemrosesan untuk mikrotik.com', () => {
    const mikrotik = fs.readFileSync('./daftar/mikrotik.txt', 'utf-8');
    const result = parseRobots(mikrotik);

    test.it("Hanya ada satu user-agent, yaitu global", () => {
        assert.strictEqual(result.agents.hasOwnProperty('*'), true);
    })

    test.it('Menyiratkan seluruh lamannya boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Allow, []);
    })

    test.it('Tidak ada laman yang tidak boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Disallow, []);
    })

    test.it('Sitemap menunjuk pada alamat XML yang benar', () => {
        assert.strictEqual(result.Sitemap[0], "https://mikrotik.com/sitemap.xml");
    })
});

test.describe('Pemrosesan untuk openai.com', () => {
    const openai = fs.readFileSync('./daftar/openai.txt', 'utf-8');
    const result = parseRobots(openai);

    test.it("Hanya ada satu user-agent, yaitu global", () => {
        assert.strictEqual(result.agents.hasOwnProperty('*'), true);
    })

    test.it('Seluruh lamannya boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Allow, ['/']);
    })

    test.it('Hanya ada satu laman yang tidak boleh dirayapi', () => {
        assert.deepStrictEqual(result.agents['*'].Disallow, ['/microsoft-for-startups/']);
    })

    test.it('Sitemap menunjuk pada alamat XML yang benar', () => {
        assert.strictEqual(result.Sitemap[0], "https://openai.com/sitemap.xml");
    })
});

test.describe('Pemrosesan untuk lazada.com', () => {
    const lazada = fs.readFileSync('./daftar/lazada.txt', 'utf-8');
    const result = parseRobots(lazada);

    test.it("Ada dua user-agent, yaitu global dan Googlebot-Image", () => {
        assert.strictEqual(result.agents.hasOwnProperty('*'), true);
        assert.strictEqual(result.agents.hasOwnProperty('googlebot-image'), true);
    })

    test.it('Menyiratkan seluruh lamannya boleh dirayapi oleh global', () => {
        assert.deepStrictEqual(result.agents['*'].Allow, []);
    })

    test.it('Menyiratkan seluruh lamannya boleh dirayapi oleh Googlebot-Image', () => {
        assert.deepStrictEqual(result.agents['googlebot-image'].Allow, []);
    })

    test.it('Ada beberapa laman yang tidak boleh dirayapi oleh global', () => {
        assert.deepStrictEqual(result.agents['*'].Disallow, ["/wow/gcp/id/member/login-signup", "/undefined/", "*/undefined/$", "*/undefined$" ]);
    })

    test.it('Tidak memiliki Sitemap', () => {
        assert.deepStrictEqual(result.Sitemap, []);
    })
});

test.describe('Pemrosesan untuk kemenag.go.id', () => {
    const kemenag = fs.readFileSync('./daftar/kemenag.txt', 'utf-8');
    const result = parseRobots(kemenag);

    test.it("Ada tiga user-agent, yaitu global, Googlebot, dan Bingbot", () => {
        assert.strictEqual(result.agents.hasOwnProperty('*'), true);
        assert.strictEqual(result.agents.hasOwnProperty('googlebot'), true);
        assert.strictEqual(result.agents.hasOwnProperty('bingbot'), true);
    })

    test.it('Seluruh lamannya boleh dirayapi oleh global', () => {
        assert.deepStrictEqual(result.agents['*'].Allow, ['/']);
    })

    test.it('Seluruh lamannya boleh dirayapi oleh Googlebot', () => {
        assert.deepStrictEqual(result.agents['googlebot'].Allow, ['/']);
    })

    test.it('Seluruh lamannya boleh dirayapi oleh Bingbot', () => {
        assert.deepStrictEqual(result.agents['bingbot'].Allow, ['/']);
    })

    test.it('Ada beberapa laman yang tidak boleh dirayapi oleh global', () => {
        assert.deepStrictEqual(result.agents['*'].Disallow, ["/api/", "/_next/", "/admin/", "/private/"]);
    })

    test.it('Ada beberapa laman yang tidak boleh dirayapi oleh Googlebot', () => {
        assert.deepStrictEqual(result.agents['googlebot'].Disallow, ["/api/", "/_next/"]);
    })

    test.it('Ada beberapa laman yang tidak boleh dirayapi oleh Bingbot', () => {
        assert.deepStrictEqual(result.agents['bingbot'].Disallow, ["/api/", "/_next/"]);
    })

    test.it('Sitemap menunjuk pada alamat XML yang benar', () => {
        assert.strictEqual(result.Sitemap[0], "https://kemenag.go.id/sitemap.xml");
    })
});