package com.springrest.services;

import com.springrest.controller.entities.Courses;
import com.springrest.dao.CourseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseDao courseDao;

//    List<Courses> list;
    public CourseServiceImpl(){
//        list = new ArrayList<>();
//        list.add(new Courses(1,"Java","This course contain basic java"));
//        list.add(new Courses(2,"Spring Boot","Creating REST API using spring boot"));
    }
    @Override
    public List<Courses> getCourses()   {
        return courseDao.findAll();
    }

    @Override
    public Courses getCourse(long courseId) {
//        Courses c = null;
//        for (Courses courses:list){
//            if (courses.getId()==courseId){
//                c=courses;
//                break;
//            }
//        }
        return courseDao.getOne(courseId);
    }

    @Override
    public Courses addCourse(Courses courses) {
//        list.add(courses);
        courseDao.save(courses);
        return courses;
    }

    @Override
    public Courses updateCourse(Courses courses) {

//        list.forEach(e -> {
//            if (e.getId() == courses.getId()){
//                e.setTitle(courses.getTitle());
//                e.setDescription(courses.getDescription());
//            }
//        });
        courseDao.save(courses);
        return courses;
    }

    @Override
    public void deleteCourse(long parseLong) {
//        list=this.list.stream().filter(e ->e.getId() !=parseLong).collect(Collectors.toList());
    Courses entity = courseDao.getOne(parseLong);
    courseDao.delete(entity);
    }
}
