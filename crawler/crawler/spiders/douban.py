import scrapy

class doubanZF(scrapy.Spider):
  name = "douban"
  start_urls = [
    'https://www.douban.com/group/106955/',
    'https://www.douban.com/group/szsh/',
    'https://www.douban.com/group/tianhezufang/',
    'https://www.douban.com/group/gz020/',
    'https://www.douban.com/group/yuexiuzufang/',

  ]
  def parse(self, response):
    for house in response.css('div'):
      yield {
        'text': house.css('tr'),
        'author': house.css('td'),
      }
    next_page = response.css('li.next a::attr("href")').extract_first()
    if (next_page) is not None:
      next_page = response.urljoin(next_page)
      yield scrapy.Request(next_page, callback=self.parse)