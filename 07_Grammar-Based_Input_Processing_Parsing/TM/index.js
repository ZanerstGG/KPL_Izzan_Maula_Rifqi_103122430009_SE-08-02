/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };
    let agenSaatIni = null;
    const barisTeks = text.split("\n"); 
    
    for (let baris of barisTeks) {
        baris = baris.split('#')[0].trim();
        if (baris === '') continue;
        const batas = baris.indexOf(':');
        if (batas === -1) continue;

        const kunci = baris.slice(0, batas).trim().toLowerCase();
        const nilai = baris.slice(batas + 1).trim();

        if (kunci === 'user-agent') {
            agenSaatIni = nilai.toLowerCase();

            if (!result.agents[agenSaatIni]) {
                result.agents[agenSaatIni] = { Allow: [], Disallow: [] };
            }
        } 
        else if (kunci === 'allow' && agenSaatIni !== null) {
            if (nilai !== '') {
                result.agents[agenSaatIni].Allow.push(nilai);
            }
        } 
        else if (kunci === 'disallow' && agenSaatIni !== null) {
            if (nilai !== '') {
                result.agents[agenSaatIni].Disallow.push(nilai);
            }
        } 
        else if (kunci === 'sitemap') {
            if (nilai !== '') {
                result.Sitemap.push(nilai);
            }
        }
        else if (kunci === 'host') {
            result.Host = nilai;
        }
    }

    return result;
}
module.exports = parseRobots;