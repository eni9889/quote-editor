// Entry point for the build script in your package.json

import "@hotwired/turbo-rails"
import { Application } from "@hotwired/stimulus"

window.application = Application.start()

import "./controllers"
