import { useState } from 'react'

export default function Form({addTask}) {
  const [taskName, setTaskName] = useState('');
  const [executor, setExecutor] = useState('');
  const [customer, setCustomer] = useState('');
  const [urgency, setUrgency] = useState('');
  const [description, setDescription] = useState('');

  function addTaskForm(event) {
    event.preventDefault()
    addTask({
      taskName, 
      executor, 
      customer, 
      urgency,
      description,
      done: false
    })
  }

  return (
    <form onSubmit={addTaskForm}>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">Добавить задачу в список</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="taskName" className="block text-sm font-medium leading-6 text-white">
                Название задачи
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    autoComplete="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="flex-1 border-0 bg-transparent py-1.5 pl-4 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Сверстать страницу регистрации"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                Описание задачи
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">Напишите подробно о самой задаче и как ее выполнять.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="customer" className="block text-sm font-medium leading-6 text-white">
                Создатель задачи
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="customer"
                    id="customer"
                    autoComplete="customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    className="flex-1 border-0 bg-transparent py-1.5 pl-4 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Иванов И.И."
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="executor" className="block text-sm font-medium leading-6 text-white">
                Исполнитель
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <input
                    type="text"
                    name="executor"
                    id="executor"
                    autoComplete="executor"
                    value={executor}
                    onChange={(e) => setExecutor(e.target.value)}
                    className="flex-1 border-0 bg-transparent py-1.5 pl-4 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Иванов И.И."
                  />
                </div>
              </div>
            </div>
            {/* <Select name="executor" labelText="Исполнитель"></Select> */}
            <fieldset className="sm:col-span-4">
              <legend className="text-sm font-semibold leading-6 text-white">Срочность</legend>
              <p className="mt-1 text-sm leading-6 text-gray-400">Выберите срочность задачи.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    value="Срочно"
                    onChange={(e) => setUrgency(e.target.value)}
                    name="urgency"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-white">
                    Срочно
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    value="Средняя срочность"
                    onChange={(e) => setUrgency(e.target.value)}
                    name="urgency"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-white">
                    Средняя срочность
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    value="Низкая срочность"
                    onChange={(e) => setUrgency(e.target.value)}
                    name="urgency"
                    type="radio"
                    className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-white">
                    Низкая срочность
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Создать задачу
        </button>
      </div>
    </form>
  )
}