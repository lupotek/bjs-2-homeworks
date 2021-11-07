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
}
