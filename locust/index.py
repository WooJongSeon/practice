from locust import HttpLocust, TaskSet, task, between


class MyTaskSet(TaskSet):
    @task
    def index(self):
        self.client.get("/")


class MyLocus(HttpLocust):
    task_set = MyTaskSet

    wait_time = between(3, 5)
