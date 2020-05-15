interface TaskModel {
  _id: {
    $oid: string;
  };
  title: string;
  description: string;
}

export default TaskModel;
