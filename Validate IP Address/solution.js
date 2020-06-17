/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    const regexIPV4 = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    const regexIPV6 = /^(([0-9a-fA-F]{1,4})\:){7}([0-9a-fA-F]{1,4})$/;
    return regexIPV4.test(IP) ? 'IPv4' : regexIPV6.test(IP) ? 'IPv6' : 'Neither';
};