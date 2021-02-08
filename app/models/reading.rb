class Reading < ApplicationRecord
  belongs_to :user
  validates :html, :css, :ruby,
            :rubyonrails, :javascript, :react,
            :consumption, :available, :saved, presence: true
end
