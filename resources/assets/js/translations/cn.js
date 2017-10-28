export default {
  message: {
    hello: 'Hello world'
  },
  auth: {
    logout: '退出'
  },
  projects: {
    index: '计划',
    create: '创建新计划',
    edit: '编辑计划',
    columns: '栏目',
    members: '提交',
    dueDate: '到期日期',
    archiveColumn: '归档',
    empty: '创建你的计划!',
    emptyArchive: '没有已完成的计划',
    archive: '计划完成项',
    active: '计划进行项',
    isArchive: '变为计划完成项？1',
    archiveProject: '变为计划完成项',
    unArchiveProject: '变为计划进行项',
    completedColumn: '已完成',
    toggleArchive: '显示存档？',
    form: {
      title: '计划名称',
      dueDate: '到期日期',
      addColumn: '添加栏',
      columnTitle: '栏名称'
    }
  },
  cards: {
    edit: '编辑任务卡',
    create: '创建任务卡',
    comments: '回复',
    logs: '日志',
    tasks: '任务项',
    files: '文件',
    form: {
      title: '任务卡名称',
      description: '描述',
      isCompleted: '已完成',
      assignedTo: '分配给',
      dueDate: '到期日期'
    }
  },
  tasks: {
    empty: '没有任务表',
    create: '添加任务项'
  },
  comments: {
    create: '发送',
    placeholder: '您的评论'
  },
  users: {
    index: '用户列表',
    create: '创建用户',
    uploadFile: '上传头像',
    edit: '编辑用户',
    role: '权限',
    roles: {
      admin: '管理员',
      manager: '管理者',
      editor: '编辑者',
      client: '客户'
    },
    form: {
      name: '名称',
      email: '登录邮箱',
      role: '权限',
      changePassword: '修改密码',
      password: '新密码',
      passwordConfirmation: '确认新密码'
    },
    filter: {
      noFilter: 'All',
      onlyAdmin: 'Only admins',
      onlyEditor: 'Only editors',
      onlyClient: 'Only clients'
    }
  },
  logs: {
    index: '报表',
    tracked: '跟踪？',
    entries: '条目',
    length: 'Length (HH:MM)',
    date: '日期',
    empty: '没有日志',
    startTimer: '启动计时器',
    stopTimer: '停止计时器'
  },
  topics: {
    index: '讨论组',
    events: 'Events',
    messages: '消息',
    files: '文件',
    create: '新建主题',
    edit: '编辑主题',
    unread: '未读',
    read: '已读',
    empty: '没有讨论主题',
    form: {
      title: '主题名称',
      members: '主题用户'
    }
  },
  events: {
    index: '日程表',
    calendar: '日历',
    agenda: '日程表',
    attach: '附加事件',
    empty: '没有日程',
    title: '日程主题',
    start: '开始时间',
    time: 'Time',
    end: '结束时间',
    location: '地点',
    clearAttachments: 'Clear events',
    ics: '互联网日历导入',
    typeProject: '计划',
    typeCard: '任务卡',
    create: '创建日程',
    edit: '编辑日程',
    prefix: {
      project: '计划',
      card: '任务卡',
      event: '日程'
    }
  },
  messages: {
    create: '新消息',
    edit: '编辑消息',
    empty: '没有消息记录',
    form: {
      message: '您的看法是......'
    }
  },
  files: {
    index: 'Files',
    empty: 'No files'
  },
  notifications: {
    index: '进度通知',
    title: '通知窗口',
    markAsRead: '标记为已读',
    clear: '清除全部通知',
    empty: '空',
    messages: {
      card_updated: '{actor} 更新 {title} 任务卡 在 <a href="#/projects/{project_id}">{project_title}</a>',
      message_created: '{actor} 创建一条消息在 <a href="#/topics/{topic_id}">{topic_title}</a> 主题',
      event_created: '{actor} 创建 <a href="#/calendar/{event_id}">{title}</a> 日程',
      task_created: '{actor} 创建一个 任务卡表项 在 <a href="#/projects/{project_id}">{project_title}</a>',
      task_updated: '{actor} 更新一个 任务卡表项 在 <a href="#/projects/{project_id}">{project_title}</a>',
      message_updated: '{actor} 更新一条消息 {title} topic',
      comment_created: '{actor} 在 <a href="#/projects/{project_id}">{project_title}</a> 上的 {title} 任务卡 发表了评论  '
    }
  },
  favorites: {
    title: '收藏夹',
    empty: '您还没有什么收藏'
  },
  common: {
    search: '查询',
    edit: '编辑',
    delete: '删除',
    save: '保存',
    cancel: '取消',
    clear: '清除1',
    loadMore: '更多载入...'
  },
  filter: {
    none: 'None',
    clear: '清除过滤项',
    index: '筛选',
    assignedTo: '分配给',
    dueDate: '到期日期',
    thisWeek: '本周',
    nextWeek: '下周',
    thisMonth: '本月',
    nextMonth: '下月'
  },
  uploader: {
    attach: '上传文件'
  }
}
