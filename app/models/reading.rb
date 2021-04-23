class Reading < ApplicationRecord
  belongs_to :user
  validates :html, :css, :ruby,
            :rubyonrails, :javascript, :react,
            :progress, :available, :left, presence: true
end
