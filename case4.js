module.exports = {
'tags' : ['case4'],
'test artsyjewels' : function (browser) {
browser
.url('https://csgo16aba.wixsite.com/familycas')
.waitForElementVisible('body', 10000)
.click('#link_forgot_password')
.setValue('#link_forgot_password > div > p:nth-child(2) > input[type="email"]', 'mr.ernur99@mail.ru')
.click('#link_forgot_password > div > p:nth-child(3) > input')
.pause(1000)
.end();
}
};
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
