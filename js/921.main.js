(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[921],{921:()=>{const e=document.querySelector("form"),t=(document.querySelector(".modal"),document.querySelector(".modal--eror")),o=document.querySelector(".modal--sent"),l=document.querySelector(".modal__button"),a=document.querySelector(".modal__button--sent"),d=document.querySelector("[name=secondName]"),n=document.querySelector("[name=firstName]"),s=document.querySelector("[name=usersEmail]");e.addEventListener("submit",(function(e){d.validity.valid&&n.validity.valid&&s.validity.valid?(e.preventDefault(),o.classList.add("modal--show")):(e.preventDefault(),t.classList.add("modal--show"))})),l.addEventListener("click",(function(e){e.preventDefault(),t.classList.remove("modal--show")})),a.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("modal--show")})),window.addEventListener("keydown",(function(e){27===e.keyCode&&(e.preventDefault(),t.classList.contains("modal--show")?t.classList.remove("modal--show"):o.classList.remove("modal--show"))}))}}]);