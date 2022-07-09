const uuid = require('uuid')
const path = require('path')
const { Event } = require('../models/models')

// создаем обработчики для роутеров
class EventController {
  async create(req, res) {

    try {
      const { firstName, lastName, patronymic, email, nameEvent, places, auditorium, description, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8 } = req.body
      const { photo } = req.files
      let fileName = uuid.v4() + ".jpg"
      photo.mv(path.resolve(__dirname, '..', 'static', fileName))
      
      const event = await Event.create({ firstName, lastName, patronymic, email, nameEvent, places, auditorium, description, photo: fileName, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8 })

      return res.json(event)


    } catch(error) {
    console.log(error)
    }
  }

  // здесь белиберда написана, нужно переделать теги под json формат или просто массив в postgre
  // когда создавал - не стал париться над этим, поэтому просто сделал временную затычку из 8 тегов:)
  async getAll(req, res) {
    let {tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let events;
    if (!tag1 && !tag2 && !tag3 && !tag4 && !tag5 && !tag6 && !tag7 && !tag8) {
      events = await Event.findAndCountAll({limit, offset})
    }
    if (tag1 && !tag2 && !tag3 && !tag4 && !tag5 && !tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag1}, limit, offset})
    }
    if (!tag1 && tag2 && !tag3 && !tag4 && !tag5 && !tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag2}, limit, offset})
    }
    if (!tag1 && !tag2 && tag3 && !tag4 && !tag5 && !tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag3}, limit, offset})
    }
    if (!tag1 && !tag2 && !tag3 && tag4 && !tag5 && !tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag4}, limit, offset})
    }
    if (!tag1 && !tag2 && !tag3 && !tag4 && tag5 && !tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag5}, limit, offset})
    }
    if (!tag1 && !tag2 && !tag3 && !tag4 && !tag5 && tag6 && !tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag6}, limit, offset})
    }
    if (!tag1 && !tag2 && !tag3 && !tag4 && !tag5 && !tag6 && tag7 && !tag8){
      events = await Event.findAndCountAll({where:{tag7}, limit, offset})
    }
    if (!tag1 && !tag2 && !tag3 && !tag4 && !tag5 && !tag6 && !tag7 && tag8){
      events = await Event.findAndCountAll({where:{tag8}, limit, offset})
    }


    return res.json(events)
  }
  async getOne(req, res) {

  }

  async test(req, res) {
    let events = await Event.findAll()
    return res.json(events)
  }
}


module.exports = new EventController()