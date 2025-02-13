class Task {
  constructor(name, description = null, users = [], status) {
    this._name = name;
    this._description = description;
    this._users = users;
    this._status = status;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get users() {
    return this._users;
  }

  get status() {
    return this._status;
  }

  // Setters
  set name(newName) {
    if (typeof newName === 'string' && newName.trim() !== '') {
      this._name = newName;
    } else {
      throw new Error('Invalid task name');
    }
  }

  set description(newDescription) {
    if (typeof newDescription === 'string') {
      this._description = newDescription;
    } else {
      throw new Error('Invalid task description');
    }
  }

  set users(newUsers) {
    if (Array.isArray(newUsers)) {
      this._users = newUsers;
    } else {
      throw new Error('Users must be an array');
    }
  }

  set status(newStatus) {
    if (typeof newStatus === 'string' && newStatus.trim() !== '') {
      this._status = newStatus;
    } else {
      throw new Error('Invalid task status');
    }
  }
  addUser(user) {
    if (user && typeof user === 'object') {
      this._users.push(user);
    } else {
      throw new Error('Invalid user');
    }
  }

  removeUser(user) {
    this._users = this._users.filter(u => u !== user);
  }
}

export default Task;
