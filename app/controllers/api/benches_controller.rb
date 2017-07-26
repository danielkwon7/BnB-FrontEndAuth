class Api::BenchesController < ApplicationController
  def index

  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create

  end 
end
