import random
from locust import HttpUser, task, between


class WebsiteUser(HttpUser):
    wait_time = between(5, 9)

    @task(6)
    def rfq(self):
        headers = {'content-type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzo0Nzk0MjRkZC0wNTI3LTQ1YjktYmZjZi1kMTVhOWJiNjk1MjUiLCJ0eXAiOiJKV1QifQ.eyJhdF9oYXNoIjoidU1mWGJuNUtpLVN6d1JwUGtlaHU3ZyIsImF1ZCI6WyJuY3ItY2xpZW50LXdlYmFwcCJdLCJhdXRoX3RpbWUiOjE1ODk0Mjg1MzksImJhciI6IjQ1NiIsImV4cCI6MTU4OTQzMjE4MiwiaWF0IjoxNTg5NDI4NTgyLCJpc3MiOiJodHRwczovL29pZGMtc3RhZ2luZy5jcmVhdGFibGUuY29tLyIsImp0aSI6ImRjZjMwOTllLWU4MzktNGE0Ny04MGZmLThiYTc5ZDlmMmYxNyIsIm5vbmNlIjoiIiwicmF0IjoxNTg5NDI4NTMzLCJzaWQiOiIyMDZhOWM1MC02ZjQ3LTQ1OTYtOGJkYi1jNDRjODc2MDkwMGEiLCJzdWIiOiJlZjRkZDg2Yi03OGMyLTQ4NzctYTdlOC1mYzkwMDViYWRlNDkifQ.6zynEAn1RwqW85Kjd9Ti1f2CLeLYL61LTKF3IyrcxNFljgXkd48nvkZK9RUvNxkcM_ljIvGo2rnkiAxTHijH0ItAzuNCRUQs0tH7zQjKXfZCTdWQ61Rtc2b5ACWe9TY-p3FIPN3RhkuOy-QadiiIW6J6zrn5tbez-XHZnA6QIuno_qZpmLdE0vO7GukooziM2SpS7vRoBKpztVHhrplGImvwMDDvkQqpkvp9WgETGoyH4w2sxHVrGScQzHBKmPM2PO6TOJlIEFV-gH2rENjctIKC4fSFe4huXxJGBnMEUlb-g2aubHRa9QeZidY52D8P78zbjDgQ96FNXGCtM4x0RLoAiwG6iC46M5C9Av3S1k9VeBJxney9KDJr9qfJ8zsc-Vggjy23yteo_G6JJXp_LTtSkGhBOKVSGvi_EsHsKvSWW96C_5M2fD5-G8Z3ebLjEtkCmCbaydsXDCqcDxyLikeLU3rHy_TGpigCtd6mLh60B58_BbEUThBK1GeEex2aq1HERWXx_kfUk2Q54LyOniX0KIChRmjpsFgyujidrMx1Eg7tRhVNhyWD6eGhaaEYIHeHZuQoUxHHcsiO7S-mb4IKuQs-BMn4r4IsmnOV6ET5lqsKBALtNb1M7u368IrTXz6JTYgQ_TyY9ceUT1BMF_MhA-BJHzsd4hb3IlHzQN8'}
        result = self.client.get(
            "/api/v1/rfq", headers=headers)

    @task(3)
    def see(self):
        post_id = random.randint(1, 10)
        self.client.post("/post?id=%i" % post_id, name="/post?id=[post-id]")

    @task(1)
    def quotation(self):
        """ on_start is called when a User starts before any task is scheduled """
        self.login()
