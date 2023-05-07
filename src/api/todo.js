/**
 * Работаем с localstorage как с web api,
 * чтобы было легко заменить
 */
const STORAGE_INDEX = 'todo_list';
const STORAGE_COUNTER_INDEX = "global_counter";

function getStatsFromLocalStorage() {
  let data = localStorage.getItem(STORAGE_COUNTER_INDEX);

  if (typeof data === 'string') {
    return JSON.parse(data);
  }
  return {};
}

function setStatsToLocalStorage(stats) {
  localStorage.setItem(STORAGE_COUNTER_INDEX,JSON.stringify(stats))
}

function getFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_INDEX);
  if (typeof data === 'string') {
    return JSON.parse(data);
  }
  return [];
}

function setToLocalStorage(list) {
  localStorage.setItem(STORAGE_INDEX, JSON.stringify(list));
}

/**
 * Удалить запись
 * @param {object} filters
 * @returns Promise<array>
 */
export function getCollection(filters = {}) {
  return new Promise(resolve => {
    const list = getFromLocalStorage();

    const filtred = list.filter(el => {
      Object.keys(filters).forEach(field => {
        if (!el[field] || el[field] !== filters[field]) {
          return false;
        }
      })
      return true;
    });

    resolve(filtred);
  });
}

/**
 * Удалить запись
 * @param {object} item
 * @returns Promise<bool>
 */
export function deleteById(id) {
  return new Promise(resolve => {
    const list = getFromLocalStorage();
    const newList = list.filter(el => el.id !== id);
    setToLocalStorage(newList);
    resolve(true);
  });
}

/**
 * Получить запись по id
 * @param {number|string} id
 * @returns Promise<object>
 */
export function getById(id) {
  return new Promise((resolve, reject) => {
    const list = getFromLocalStorage();
    const item = list.fild(el => el.id === id);
    if (item) {
      resolve(item);
    }
    reject('not found');
  });
}

/**
 * Добавить запись
 * @param {object} item
 * @returns Promise<bool>
 */
export function add(item) {
  return new Promise(resolve => {
    const list = getFromLocalStorage();
    list.push(item);
    setToLocalStorage(list);
    resolve(true);
  });
}

/**
 * Обновить запись полной заменой
 * @param {number|string} id
 * @param {object} item
 * @returns Promise<object>
 */

export function putById(id, item, index) {
  return new Promise(resolve => {
    const list = getFromLocalStorage();
    const newElement = {...item, id};
    const newList = [...list.slice(0,index), newElement, ...list.slice(index+1)]
    setToLocalStorage(newList);
    resolve(true);
  });
}

export function countTotalTodosEver(action){
  return new Promise(resolve => {
    const stats = getStatsFromLocalStorage();

    if (action === "increase") {
      stats.globalTodoCounter = stats.globalTodoCounter + 1;
    }
    if (action === "decrease") {
      stats.globalTodoCounter = stats.globalTodoCounter - 1;
    }
    setStatsToLocalStorage(stats);
    resolve(true);
  })
}

export function getStats(){
  return new Promise(resolve => {
    const list = getFromLocalStorage();
    const stats = getStatsFromLocalStorage();

    if (!Object.keys(stats).length) {
      console.log(typeof list.length, list.length)
      stats.globalTodoCounter = list.length;
      setStatsToLocalStorage(stats);
    }

    resolve(stats);
  })
}

