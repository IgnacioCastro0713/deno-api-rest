interface Task {
  _id: {
    $oid: string;
  };
  title: string;
  description: string;
}

export default Task;
