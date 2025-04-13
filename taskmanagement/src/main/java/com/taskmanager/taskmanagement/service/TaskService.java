package com.taskmanager.taskmanagement.service;

import com.taskmanager.taskmanagement.model.Task;
import com.taskmanager.taskmanagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.taskmanager.taskmanagement.model.TaskStatus;



import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;


    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task createTask(Task task) {
        if (task.getStatus() == null) {
            task.setStatus(TaskStatus.TODO); // or whatever your default is
        }

        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());

            task.setStatus(updatedTask.getStatus());
            task.setDueDate(updatedTask.getDueDate());

            task.setCompleted(updatedTask.isCompleted());

            return taskRepository.save(task);
        } else {
            return null;
        }
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public List<Task> getTasksByStatus(TaskStatus status) {
        return taskRepository.findByStatus(status);
    }

    public List<Task> getTasksSortedByDueDateAsc() {
        return taskRepository.findAllByOrderByDueDateAsc();
    }

    public List<Task> getTasksSortedByDueDateDesc() {
        return taskRepository.findAllByOrderByDueDateDesc();
    }

    public List<Task> getTasksByStatusSortedAsc(TaskStatus status) {
        return taskRepository.findByStatusOrderByDueDateAsc(status);
    }

    public List<Task> getTasksByStatusSortedDesc(TaskStatus status) {
        return taskRepository.findByStatusOrderByDueDateDesc(status);
    }

}
