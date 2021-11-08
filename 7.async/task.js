class AlarmClock {
  constructor (alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (time, callback, id) {
    const checkId = this.alarmCollection.some((item)=> item.id === id)
    if (id === undefined) {
      throw new Error ('будильник не существует');
      } else if (checkId) {
      console.error ('такой будильник уже существует');
    } else {
      return this.alarmCollection.push({time, callback, id})
    }
  }

  removeClock (alarmId) {
    let initialLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== alarmId)
    return this.alarmCollection.length < initialLength
  }

  getCurrentFormattedTime () {
    return new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit",
    minute: "2-digit",});
  }

  start () {
      if (this.timerId === null) {
      this.timerId = setInterval ((() => 
  this.alarmCollection.forEach ((alarm) => {
          if (alarm.time === this.getCurrentFormattedTime ()) {
            return alert("Доброе утро!")
          }
        })
      ), 2000) 
    }
  }

  stop () {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null
    }
  }

  printAlarms () {
    this.alarmCollection.forEach(alarm => console.log("Будильник номер " + alarm.id + ". Время: " + alarm.time))
  }

  clearAlarms () {
    this.stop()
    this.alarmCollection = []
  }
}