class AlarmClock {
    constructor (alarmCollection, timerId) {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
  
    addClock (time, callback, id) {
      const checkId = this.alarmCollection.some((item)=> item.id === id)
      if (id === undefined) {
        throw new Error ('error text');
        } else if (checkId === true) {
        console.error ('error text2');
      } else {
        return this.alarmCollection.push({time: time, callback: callback, id: id})
      }
    }

    removeClock (alarmId) {
        let initialLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== alarmId)
        if (this.alarmCollection.length > initialLength) {
            return true
            } else {
              return false
        }
    }

    getCurrentFormattedTime () {
      return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",});
    }
    
    start () {
      if (this.timerId === null) {
      this.timerId = setInterval ((() => this.alarmCollection.forEach (alarm => {
        if (alarm.time === this.getCurrentFormattedTime ()) {
          return alarm.callback
        }   
        })), 2000) 
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

