import { makeAutoObservable } from "mobx"

class Store {
  data = [
    { id: 11, title: 'One', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 12, title: 'One lesson One', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 13, title: 'Lesson one one lesson Again', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 14, title: 'Dream Four Again', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 15, title: 'Dream Dream Dream Dream Again Four 5', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 16, title: 'Dream Dream Dream Four 6', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
    { id: 17, title: 'Dream Dream Dream Four 8', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.', date: new Date() },
  ]

  edit = null
  searchText = ""

  constructor() {
      makeAutoObservable(this)
  }
  get getData() {
    return this.data.filter(item => item.title.toLowerCase().includes(this.searchText.toLowerCase().trim()))
  }

  add(obj) {
      obj.id = +this.data.length + 11
      obj.date = new Date()
      this.data = [obj, ...this.data]
  }

  delete(id) {
    this.data = this.data.filter(post => post.id !== id)
  }

  editOn(id) {
    this.edit = this.data.find(post => post.id === id)
  }

  editPost(obj) {
    obj.date = new Date()
    const index = this.data.findIndex(post => post.id === obj.id)
    this.data[index] = obj
    this.edit = null
  }

  setSearchText(text) {
    this.searchText = text
  }

  getPostById(id) {
    const currPost = this.data.find(item => item.id === id)
    const key = new Set([...currPost.title.split(" "), ...currPost.description.split(" ")])
    let topSimilarArr = []

    this.data.forEach(post => {
      if (post.id !== id) {
        const allText = ' ' + post.title + ' ' + post.description + ' '
        let count = 0
        for (let word of key) {
          const reg = new RegExp(` ${word} `, 'gm')
          if (allText.match(reg)) {
            count += allText.match(reg).length
          }
        }
        topSimilarArr.push({count, post})
      }
    })

  
    return {currPost, topSimilarArr: topSimilarArr.sort((a,b) =>  b.count - a.count ).slice(0,3).map(item => item.post)}
  }

}

export const myStore = new Store()