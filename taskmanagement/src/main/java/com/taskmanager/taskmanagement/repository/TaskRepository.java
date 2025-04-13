package com.taskmanager.taskmanagement.repository;

import com.taskmanager.taskmanagement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.taskmanager.taskmanagement.model.TaskStatus;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(TaskStatus status);
    List<Task> findAllByOrderByDueDateAsc();
    List<Task> findAllByOrderByDueDateDesc();
    List<Task> findByStatusOrderByDueDateAsc(TaskStatus status);
    List<Task> findByStatusOrderByDueDateDesc(TaskStatus status);
}
