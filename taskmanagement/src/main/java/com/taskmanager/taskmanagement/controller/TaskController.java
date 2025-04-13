package com.taskmanager.taskmanagement.controller;

import com.taskmanager.taskmanagement.model.Task;
import com.taskmanager.taskmanagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.taskmanager.taskmanagement.model.TaskStatus;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Optional<Task> getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @GetMapping("/status/{status}")
    public List<Task> getTasksByStatus(@PathVariable TaskStatus status) {
        return taskService.getTasksByStatus(status);
    }

    @GetMapping("/sorted/due-date/asc")
    public List<Task> getTasksSortedByDueDateAsc() {
        return taskService.getTasksSortedByDueDateAsc();
    }

    @GetMapping("/sorted/due-date/desc")
    public List<Task> getTasksSortedByDueDateDesc() {
        return taskService.getTasksSortedByDueDateDesc();
    }

    @GetMapping("/status/{status}/sorted/due-date/asc")
    public List<Task> getTasksByStatusSortedAsc(@PathVariable TaskStatus status) {
        return taskService.getTasksByStatusSortedAsc(status);
    }

    @GetMapping("/status/{status}/sorted/due-date/desc")
    public List<Task> getTasksByStatusSortedDesc(@PathVariable TaskStatus status) {
        return taskService.getTasksByStatusSortedDesc(status);
    }
}
