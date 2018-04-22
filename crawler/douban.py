import requests
from lxml import html

def get_html(url):
    
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        # 'Cookie': {
        #             bid:uM-DgzLg9Bc,
        #             gr_user_id:951cbefe-fb4e-42f9-89f3-9a27afa663e9,
        #             ll="118281",
        #             __utmc=30149280,
        #             _vwo_uuid_v2: 74E7D14485315D42C68660E63D1F810A|49d01d43dd9ece489fe75db9287f7da7,
        #             _pk_ref.100001.8cb4: %5B%22%22%2C%22%22%2C1517071318%2C%22http%3A%2F%2Fhllvm.group.iteye.com%2Fgroup%2Ftopic%2F39194%22%5D,
        #             _pk_id.100001.8cb4: 02d9088989869ac2.1506163888.8.1517071318.1516014072.,
        #             __utma: 30149280.1827237665.1504848364.1517069458.1517071320.12,
        #             __utmz: 30149280.1517071320.12.12.utmcsr=hllvm.group.iteye.com|utmccn=(referral)|utmcmd=referral|utmcct=/group/topic/39194,
        #             viewed="25863515_27127110_25823709_1794389_26915970_26197294_2152385_4117971_4291903_25735333"
        #         },
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    }
    r = requests.get(url, headers=header)
    return html.fromstring(r.text)

    
def find_resp_data():
    url = 'https://www.douban.com/group/106955/'
    response = get_html(url)
    if response == None:
        return
    house_list = response.xpath('//*[@class="olt"]')
    print(house_list)


if __name__ == '__main__':
    