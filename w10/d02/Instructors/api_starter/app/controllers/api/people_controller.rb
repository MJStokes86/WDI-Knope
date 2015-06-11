module Api
  class PeopleController < ApplicationController

    def index
      people = Person.all
      render json: people
    end

    def random
      random_person = Person.order("RANDOM()").first
      # people = Person.all
      # random_person = people.sample
      render json: random_person
    end

  end
end
