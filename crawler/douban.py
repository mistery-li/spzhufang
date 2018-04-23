import requests
from lxml import etree
import json


def get_house_info(url):
    headers = {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36',
        'Referer':
            'https://www.douban.com/group/topic/115850099/',
        'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Cookie':
            'bid=Pn84or5YFQY; gr_user_id=2693c054-93b9-4dee-aa3c-9989d79b85fd; _vwo_uuid_v2=6EE185C75C18284615246CC9CA37F466|d04e01c0d814ea919b215033e81436b7; __yadk_uid=Z38MFAT9jvfhZeY22Z843wfpygdtSCKS; ll="118289"; ct=y; viewed="26918038_25863515_24737674_25870705_25879763_26598045_19933548_26854244_26638316_27072230"; ps=y; push_noty_num=0; push_doumail_num=0; __utmv=30149280.14706; ap=1; _ga=GA1.2.508846888.1512179653; __utmz=30149280.1524191404.25.22.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _pk_ref.100001.8cb4=%5B%22%22%2C%22%22%2C1524272535%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_ses.100001.8cb4=*; __utma=30149280.508846888.1512179653.1524212132.1524272537.27; __utmc=30149280; __utmt=1; _pk_id.100001.8cb4=63b35cbf167dd455.1512724784.18.1524273081.1524212398.; __utmb=30149280.52.5.1524273081306',
    }
    print(url)
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        result = etree.HTML(response.content)
        house_list = result.xpath('//*[@class="olt"]/tr')
        data_dict = []
        for house in house_list[1:]:
            topic = house.xpath('td[1]/a//text()')[0].strip()
            author = house.xpath('td[2]/a//text()')[0].strip()
            reader_resp = house.xpath('td[3]//text()')[0]
            time = house.xpath('td[4]//text()')[0]
            data = {
                'topic': topic,
                'author': author,
                'reader_resp': reader_resp,
                'time': time
            }
            data_dict.append(data)
        print((data_dict))
        save_file(data_dict)
    else:
        return

def save_file(data):
    json_data = json.dumps(data)
    with open('douban.json', 'w') as f:
        f.write(json_data)

def get_html():
    url = 'https://www.douban.com/group/106955/discussion?start='
    headers = {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36',
        'Referer':
            'https://www.douban.com/group/topic/115850099/',
        'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Cookie':
            'bid=Pn84or5YFQY; gr_user_id=2693c054-93b9-4dee-aa3c-9989d79b85fd; _vwo_uuid_v2=6EE185C75C18284615246CC9CA37F466|d04e01c0d814ea919b215033e81436b7; __yadk_uid=Z38MFAT9jvfhZeY22Z843wfpygdtSCKS; ll="118289"; ct=y; viewed="26918038_25863515_24737674_25870705_25879763_26598045_19933548_26854244_26638316_27072230"; ps=y; push_noty_num=0; push_doumail_num=0; __utmv=30149280.14706; ap=1; _ga=GA1.2.508846888.1512179653; __utmz=30149280.1524191404.25.22.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _pk_ref.100001.8cb4=%5B%22%22%2C%22%22%2C1524272535%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_ses.100001.8cb4=*; __utma=30149280.508846888.1512179653.1524212132.1524272537.27; __utmc=30149280; __utmt=1; _pk_id.100001.8cb4=63b35cbf167dd455.1512724784.18.1524273081.1524212398.; __utmb=30149280.52.5.1524273081306',
    }
    R = requests.get(url, headers=headers)
    if R.status_code == 200:
        response = etree.HTML(R.content)
        page = response.xpath('//span[@class="thispage"]//@data-total-page')[0]
        maxpage = int(page)
        index = 0
        for i in range(maxpage):
            index += 25
            page_url = 'https://www.douban.com/group/106955/discussion?start={}'.format(index)
            get_house_info(page_url)


def spider_logger():
    pass
    # logger 记录


if __name__ == '__main__':
    get_html()
