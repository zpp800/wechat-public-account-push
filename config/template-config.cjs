/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
      id: '0003',
      title: '涵涵, 早上好呀',
      desc: `
        🗓️**{{date.DATA}}**

        今天是我们在一起的第{{love_day.DATA}}天，爱你❤️
        
        今日{{city.DATA}}天气☁️：{{weather.DATA}}
        
        温度🌡️: {{min_temperature.DATA}}-{{max_temperature.DATA}}
        
        风向：{{wind_direction.DATA}}
        
        风级：{{wind_scale.DATA}}
        
        湿度：{{shidu.DATA}}
        
        空气质量：{{aqi.DATA}}
        
        预防感冒提醒：{{ganmao.DATA}}
        
        下一休息日：{{holidaytts.DATA}}
        
        ---
        
        {{birthday_message.DATA}}

        ---

        {{comprehensive_horoscope.DATA}}

        ---

        {{moment_copyrighting.DATA}}
        
        {{poetry_title.DATA}} {{poetry_content.DATA}}
        `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
