(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"html"}
  :dependencies '[[org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.10.339"]
                  [adzerk/boot-cljs          "2.1.4"]
                  [pandeiro/boot-http        "0.8.3" :exclusions [org.clojure/clojure]]
                  [adzerk/boot-reload        "0.6.0"]
                  [adzerk/boot-cljs-repl     "0.3.3"]
                  [com.cemerick/piggieback   "0.2.1"  :scope "test" :exclusions [org.clojure/clojure]]
                  [weasel                    "0.7.0"  :scope "test" :exclusions [org.clojure/clojure]]
                  [org.clojure/tools.nrepl   "0.2.12" :scope "test" :exclusions [org.clojure/clojure]]
                  [reagent                   "0.8.1"]])

(require '[adzerk.boot-cljs      :refer [cljs]]
         '[pandeiro.boot-http    :refer [serve]]
         '[adzerk.boot-reload    :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
  "Launch immediate-feedback development environment."
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload :on-jsload 'scrambler.core/init!)
   (cljs-repl)
   (cljs)
   (target :dir #{"target"})))

(deftask build
  "Deploy to GitHub Pages."
  []
  (comp
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))
