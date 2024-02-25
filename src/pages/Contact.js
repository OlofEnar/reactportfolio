import React from "react";
import MainLayout from "../layout/MainLayout";
import "../css/contact-page.css";
import Hero from "../components/Hero";

function Contact() {
  return (
    <div id="bg">
    <MainLayout>
      <Hero pageTitle={'kontakt'}/>
      <div class="form_container">
          <form action="" method="post">
            <div class="form_items">
              <label for="name">Förnamn</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Emmet"
              />
            </div>
            <div class="form_items">
              <label for="name">Efternamn</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Brown"
              />
            </div>

            <div class="form_items">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="emmet@brown.com"
              />
            </div>

            <div class="form_items">
              <label for="message">Meddelande</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <input
              id="SendButton"
              type=""
              class="button button_centered"
              value="Skicka"
            />
          </form>
        </div>
  </MainLayout>
  </div>
  );
}

export default Contact;
